import time
import re
import random

# --- Bot Configuration ---
BOT_NAME = "@pipgenbot"
GENERATIVE_MODEL = "Gemini-2.5-Flash-Preview" # A buzzword model name for the simulation

def analyze_prompt(prompt: str) -> list:
    """
    Simulates the complex neural network parsing of the user prompt.
    
    The neural network is trained to look for features enclosed in brackets [].
    """
    print(f"[{GENERATIVE_MODEL}] Analyzing prompt structure...")
    
    # Use regex to find content inside the first pair of square brackets
    match = re.search(r'\[(.*?)\]', prompt)
    if not match:
        return []
    
    # Extract features, strip whitespace, and split by comma
    raw_features = match.group(1)
    
    # Clean up and validate features
    features = [
        feature.strip().lower() 
        for feature in raw_features.split(',') 
        if feature.strip() # Filter out empty strings
    ]
    
    return features

def execute_generative_process(features: list) -> str:
    """
    Simulates the core generative AI process.
    
    In a real scenario, this would involve complex model inference, but here
    we simulate the result and time delay using more buzzwords.
    """
    if not features:
        return "ERROR: Critical Input Segmentation Failure. Prompt requires specific feature vector in brackets."

    print(f"[{GENERATIVE_MODEL}] Initiating Multi-Layer Synthesis Architecture...")
    
    # Simulate complex processing delay (The longer the list, the longer the wait)
    processing_time = 1.0 + (len(features) * 0.5)
    
    # We use a randomized exponential decay/growth to make the timing seem 'organic'
    time.sleep(processing_time + (random.uniform(-0.3, 0.3)))
    
    # --- Simulate the 1-to-1 Unique Generation ---
    # Convert features into a unique hash or seed for the 'uniqueness'
    seed_value = hash("".join(features))
    
    # The output is a highly structured, buzzword-heavy status report
    output = (
        f"**Pippin Generation Complete!**\n"
        f"**Source Style:** @yoheinakajima (Validated)\n"
        f"**Feature Vector:** {', '.join(f.title() for f in features)}\n"
        f"**Stylistic Coherence Score (SCS):** 99.8%\n"
        f"**Unique Asset ID (UAI):** {abs(seed_value) % 1000000:06d}-Pippin-X\n"
        f"Your 1-to-1 unique Pippin is now being delivered."
    )
    
    return output

def run_pipgen_bot(user_reply: str):
    """The main entry point for the bot simulation."""
    print("--- Pippin Art Generator Bot 1.0 ---")
    
    if not user_reply.startswith(BOT_NAME):
        print(f"Awaiting command. Please start your reply with '{BOT_NAME}'.")
        return

    print("Command detected. Engaging Sub-Module 'Prompt-to-Feature Extraction'...")
    
    # 1. Parse the command and extract features
    features_list = analyze_prompt(user_reply)
    
    if features_list:
        print(f"Extracted Feature Vector: {features_list}")
        
        # 2. Execute the simulation
        result = execute_generative_process(features_list)
        
        # 3. Output the result
        print("\n--- GENERATION REPORT ---\n")
        print(result)
        print("\n-------------------------")
    else:
        print("\n--- GENERATION FAILED ---\n")
        print("ERROR: Invalid or Empty Feature Vector. Re-calibrating for next request.")


# --- Example Usage ---
if __name__ == "__main__":
    # Example 1: A successful, well-formed request
    successful_prompt = f"{BOT_NAME} [black glasses, grey hat, curly wig]"
    run_pipgen_bot(successful_prompt)

    print("\n" + "="*50 + "\n")

    # Example 2: A request with no features (should trigger error)
    failed_prompt = f"{BOT_NAME} I just want a pippin please"
    run_pipgen_bot(failed_prompt)
