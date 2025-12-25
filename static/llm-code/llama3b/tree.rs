use std::env;
use std::fs;
use std::time::{SystemTime, UNIX_EPOCH};

const WIDTH: u32 = 800;
const HEIGHT: u32 = 600;

fn save_svg(filename: &str, content: &str) {
    fs::write(filename, content).expect("Failed to write SVG file");
}

fn generate_fractal_tree(depth: u32) -> String {
    let mut svg = format!(
        r#"<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {} {}">
<path stroke="black" fill="none" d=""#, WIDTH, HEIGHT
    );

    fn draw_branch(
        svg: &mut String,
        x1: f64,
        y1: f64,
        angle: f64,
        length: f64,
        remaining_depth: u32,
    ) {
        let rad_angle = std::f64::consts::PI * angle / 180.0;
        let x2 = x1 + (length * rad_angle.cos());
        // Convert HEIGHT to f64 before subtracting y2
        let y2 = y1 - (length * rad_angle.sin()); 
        svg.push_str(&format!(
            "M{:.3} {:.3} L{:.3} {:.3} ",
            x1, HEIGHT as f64 - y1, x2, HEIGHT as f64 - y2
        ));

        if remaining_depth > 0 {
            draw_branch(svg, x2, y2, angle + 25.0, length * 0.65, remaining_depth - 1);
            draw_branch(svg, x2, y2, angle - 25.0, length * 0.65, remaining_depth - 1);
        }
    }

    // Start from bottom center
    let start_x = WIDTH as f64 / 2.0;
    let start_y = HEIGHT as f64;

    draw_branch(&mut svg, start_x, start_y, -90.0, HEIGHT as f64 * 0.15, depth);

    svg.push_str("\"/>");
    svg
}

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() != 2 {
        eprintln!("Usage: {} <depth>", args[0]);
        return;
    }
    let depth = match args[1].parse::<u32>() {
        Ok(d) => d,
        Err(_) => {
            eprintln!("Invalid argument. Enter a valid number for recursion depth.");
            return;
        }
    };

    let ts = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("Time went backwards")
        .as_secs();
    let filename = format!("tree{}.svg", ts);
    let svg_content = generate_fractal_tree(depth);

    save_svg(&filename, &svg_content);
    println!("Fractal tree saved as {}", filename);
}
