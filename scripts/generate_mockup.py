"""
Gemini 3 Pro Image Generation Script (4K with High Thinking)
Generate portfolio mockups using Google's Gemini 3 Pro Image model

Usage:
    python generate_mockup.py --prompt "Your image prompt here" --output "output_filename.png"
    
Environment:
    Set gemini_api_key in .env file or pass --api-key flag
"""

import os
import sys
import argparse
import base64
from pathlib import Path

# Load environment variables from .env file
def load_env():
    env_path = Path(__file__).parent.parent / ".env"
    if env_path.exists():
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    os.environ[key.strip()] = value.strip()

load_env()

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai package...")
    os.system("pip install google-genai")
    from google import genai
    from google.genai import types


# ============================================
# CONFIGURATION
# ============================================
MODEL = "gemini-3-pro-image-preview"  # Gemini 3 Pro Image (Nano Banana Pro)
OUTPUT_RESOLUTION = "4K"  # 4K resolution (4096x4096)


def generate_image(
    prompt: str,
    output_path: str = "output.png",
    api_key: str = None,
) -> str:
    """
    Generate a 4K image using Gemini 3 Pro Image model with high thinking.
    
    Args:
        prompt: Text description of the image to generate
        output_path: Path to save the generated image
        api_key: Google AI API key (uses gemini_api_key env var if not provided)
        
    Returns:
        Path to the saved image
    """
    # Get API key
    api_key = api_key or os.getenv("gemini_api_key") or os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError(
            "API key required. Set gemini_api_key in .env file "
            "or pass --api-key flag"
        )
    
    # Initialize client
    client = genai.Client(api_key=api_key)
    
    # Enhanced prompt for 4K quality
    enhanced_prompt = f"""Generate a high-resolution 4K (4096x4096) professional image:

{prompt}

Requirements:
- Ultra high resolution (4K/4096x4096)
- Professional quality
- Sharp details
- Premium aesthetic"""

    print(f"🎨 Generating 4K image...")
    print(f"📝 Prompt: {prompt[:100]}...")
    
    # Generate image
    response = client.models.generate_content(
        model=MODEL,
        contents=enhanced_prompt,
        config=types.GenerateContentConfig(
            response_modalities=["image", "text"]
        )
    )
    
    # Process response
    for part in response.candidates[0].content.parts:
        if part.inline_data is not None:
            # Decode and save image
            image_data = part.inline_data.data
            
            # Ensure output directory exists
            output_file = Path(output_path)
            output_file.parent.mkdir(parents=True, exist_ok=True)
            
            # Save image
            with open(output_file, "wb") as f:
                if isinstance(image_data, str):
                    f.write(base64.b64decode(image_data))
                else:
                    f.write(image_data)
            
            print(f"✅ 4K Image saved to: {output_file.absolute()}")
            return str(output_file.absolute())
    
    # Check for text response (might contain error or explanation)
    for part in response.candidates[0].content.parts:
        if hasattr(part, 'text') and part.text:
            print(f"ℹ️ Model response: {part.text}")
    
    raise RuntimeError("No image was generated in the response")


# ============================================
# PREDEFINED PORTFOLIO MOCKUP PROMPTS
# ============================================
PORTFOLIO_PROMPTS = {
    "gradient": """Professional dark theme 3D portfolio website hero section UI design mockup. 
        Features: Top left corner has a minimal white text logo "AS" with subtle glow. 
        Full screen hero with deep purple-black gradient background (#030014 to #1a0533) 
        with floating geometric 3D shapes (spheres, cubes, torus) with soft purple and cyan lighting. 
        Center has large bold white heading text "Software Engineer". 
        Right side has a professional circular profile photo with a glowing purple/cyan border ring. 
        Floating glass-morphism navigation bar at top with links: Home, About, Skills, Projects, Experience, Contact. 
        Aurora/mesh gradient effects in background. Premium, modern, tech-focused aesthetic.
        Ultra high quality, 4K resolution, pixel perfect UI design.""",
        
    "minimal": """Ultra minimal dark 3D portfolio hero section UI design. 
        Black background (#000000) with a single large 3D wireframe sphere in the center 
        made of thin white/cyan glowing lines. Large bold white typography "AMIT SAINI" 
        split across the screen with letters partially hidden behind the 3D object creating depth. 
        Small subtle navigation links in the top right corner. 
        Bottom has tagline "Software Engineer • Web Developer". 
        Extremely clean, lots of negative space, editorial design aesthetic. 
        Inspired by Apple product pages. Premium minimalist aesthetic.
        Ultra high quality, 4K resolution, pixel perfect UI design.""",
        
    "immersive": """Immersive 3D space theme portfolio hero section. 
        Deep space background with subtle stars and nebula clouds in purple and blue. 
        A large floating astronaut or abstract human figure made of particles in the center-right. 
        Left side has bold white text "CREATIVE DEVELOPER" stacked vertically. 
        Floating glass cards with skill icons orbit around the figure. 
        Vertical navigation dots on the left edge. 
        Cinematic lighting with rim lights. Sci-fi futuristic aesthetic. 
        Premium quality, movie poster style composition.
        Ultra high quality, 4K resolution, pixel perfect UI design.""",
        
    "bento": """Creative interactive 3D portfolio hero with bento grid layout. 
        Dark charcoal background (#0a0a0a). Asymmetric bento grid with different sized cards. 
        Main large card on left shows "Hi, I'm Amit" with animated gradient text. 
        Right side has smaller cards: one with a 3D rotating cube, one with a profile photo, 
        one with code snippet, one with floating tech stack icons. 
        Each card has glass-morphism effect with colored borders (purple, cyan, pink). 
        Floating navigation bar at top. Playful yet professional. 
        Inspired by Apple's bento presentations.
        Ultra high quality, 4K resolution, pixel perfect UI design.""",
        
    "bold": """Bold typographic 3D portfolio hero section. 
        Massive oversized white 3D extruded text "DEVELOPER" taking up most of the screen 
        with strong perspective and depth, casting shadows. Text appears to come out of the screen. 
        Dark purple-black gradient background. Small profile photo floating to the side. 
        Accent elements in neon pink and electric blue. 
        Grain texture overlay for depth. Navigation hidden, only a menu icon. 
        Brutalist meets 3D aesthetic. High contrast, dramatic, unforgettable first impression.
        Ultra high quality, 4K resolution, pixel perfect UI design."""
}


def generate_portfolio_mockup(variant: str, api_key: str = None) -> str:
    """
    Generate a specific portfolio mockup variant in 4K.
    
    Args:
        variant: One of 'gradient', 'minimal', 'immersive', 'bento', 'bold'
        api_key: Google AI API key
        
    Returns:
        Path to the saved image
    """
    if variant not in PORTFOLIO_PROMPTS:
        raise ValueError(f"Unknown variant: {variant}. Choose from: {list(PORTFOLIO_PROMPTS.keys())}")
    
    prompt = PORTFOLIO_PROMPTS[variant]
    output_path = f"mockups/hero_{variant}_4k.png"
    return generate_image(prompt, output_path, api_key)


def generate_custom(prompt: str, output_name: str = "custom", api_key: str = None) -> str:
    """
    Generate a custom mockup with your own prompt.
    
    Args:
        prompt: Your custom prompt
        output_name: Name for the output file (without extension)
        api_key: Google AI API key
        
    Returns:
        Path to the saved image
    """
    output_path = f"mockups/{output_name}_4k.png"
    return generate_image(prompt, output_path, api_key)


def main():
    parser = argparse.ArgumentParser(description="Generate 4K portfolio mockups with Gemini 3 Pro (High Thinking)")
    parser.add_argument("--prompt", "-p", type=str, help="Custom prompt for image generation")
    parser.add_argument("--variant", "-v", type=str, 
                        choices=["gradient", "minimal", "immersive", "bento", "bold"],
                        help="Generate a predefined portfolio variant")
    parser.add_argument("--output", "-o", type=str, default="custom", 
                        help="Output file name (without extension)")
    parser.add_argument("--api-key", "-k", type=str, help="Google AI API key")
    parser.add_argument("--all", "-a", action="store_true", 
                        help="Generate all predefined variants")
    parser.add_argument("--list", "-l", action="store_true",
                        help="List all available variants")
    
    args = parser.parse_args()
    
    if args.list:
        print("\n📋 Available Portfolio Variants:\n")
        for name, prompt in PORTFOLIO_PROMPTS.items():
            print(f"  • {name}")
            print(f"    {prompt[:80]}...\n")
        return
    
    try:
        if args.all:
            # Generate all variants
            variants = list(PORTFOLIO_PROMPTS.keys())
            print(f"\n🚀 Generating all {len(variants)} variants in 4K...\n")
            for i, variant in enumerate(variants, 1):
                print(f"\n{'='*50}")
                print(f"🎨 [{i}/{len(variants)}] Generating {variant} variant...")
                print(f"{'='*50}")
                generate_portfolio_mockup(variant, args.api_key)
                
        elif args.variant:
            # Generate specific variant
            generate_portfolio_mockup(args.variant, args.api_key)
            
        elif args.prompt:
            # Custom prompt
            generate_custom(args.prompt, args.output, args.api_key)
            
        else:
            parser.print_help()
            print("\n💡 Examples:")
            print('  python generate_mockup.py --variant minimal')
            print('  python generate_mockup.py --variant bold')
            print('  python generate_mockup.py --all')
            print('  python generate_mockup.py --prompt "Your custom prompt" --output hero')
            print('  python generate_mockup.py --list')
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
