import glob
import ftfy

replacements = {
    'ðŸ“–': '📖',
    'ðŸ–‹ï¸ ': '🖊️',
    'ðŸ †': '🏆',
    'â† ': '←',
    'ðŸ“„': '📄',
    'âœ”': '✔',
    'âœ•': '✖',
    'ðŸ“Š': '📊',
    'â ±': '⏱',
    'â– ': '■',
    'ðŸ ·ï¸ ': '🏷️',
    'âš–ï¸ ': '⚖️',
    '⚖ï¸ ': '⚖️',
    'âœ ï¸ ': '✏️',
    'â “': '❓',
    'ðŸ“ ': '📍',
    'â °': '⏳',
    'âš™ï¸ ': '⚙️',
    'ðŸ —ï¸ ': '🏗️',
    'â »²': '⁻²',
    'â »Â¹': '⁻¹',
    'Â²': '²',
    'ðŸ“š': '📚',
    'ðŸ“ ': '📌',
    'â­ ': '⭐',
    'ðŸŒ ': '🌍',
    'ðŸ”„': '🔄',
    'ðŸ” ': '🔍',
    'ðŸŒŠ': '🌊',
    'Îµ': 'ε',
    'Î¸': 'θ',
    'â‰ˆ': '≈',
    'âˆ ': '∝',
    'Ï ': 'ρ',
    'â†”ï¸ ': '↔️',
    'â‰¤': '≤',
    'ðŸ•°ï¸ ': '🕰️',
    'â »â ¶': '⁻⁶',
    'â »â µ': '⁻⁵',
    'â »â ´': '⁻⁴',
    'â »Â³': '⁻³',
    'Â¹Â¹': '¹¹',
    'â ¶': '⁶',
    'â µ': '⁵',
    'â ¸': '⁸',
    'â ·': '⁷',
    'â ¹': '⁹',
    'â‚ ': '₁',
    'â‚‚': '₂',
    'Â½': '½',
    'Ã—': '×',
    'Î”': 'Δ',
    'â€”': '—',
    'ðŸ’¡': '💡',
    'ðŸ‘¤': '👤',
    'âž”': '➔',
    'ðŸŒ€': '🌀',
    'ðŸ§±': '🧱',
    'âš¡': '⚡',
    'âš ï¸ ': '⚠️',
    'âœ‚ï¸ ': '✂️',
    'ðŸŽˆ': '🎈',
    'Ïƒ': 'σ'
}

for file in glob.glob('components/*.jsx') + ['app.jsx', 'index.html']:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        fixed_content = ftfy.fix_text(content)
        
        # apply any remaining hardcoded overrides in case ftfy missed some edge cases
        for k, v in replacements.items():
            fixed_content = fixed_content.replace(k, v)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f'Fixed {file}')
    except Exception as e:
        print(f'Error on {file}: {e}')
