# Tidy Reverse Layout

A Figma plugin that converts LTR (left-to-right) layouts to RTL (right-to-left) and translates English text to Hebrew. Perfect for adapting your design system for RTL languages.

## Features

- **Automatic Layout Mirroring**: Reverses horizontal layouts and adjusts alignment properties
- **Text Direction Adjustment**: Flips text alignment from left to right and vice versa
- **Hebrew Translation**: Automatically translates English text to Hebrew
- **Design System Integration**: Works with components, component sets, and instances
- **Clear Error Handling**: Provides detailed notifications for troubleshooting

## How It Works

1. **Layout Mirroring**:
   - Creates duplicates of selected elements with "-RTL" suffix
   - Reverses horizontal layout alignment (left → right)
   - Reverses child order in horizontal layouts
   - Adjusts alignment properties for both primary and counter axes

2. **Component Integration**:
   - Intelligently searches for RTL variants of components (with "-RTL" suffix)
   - Replaces instances with their RTL counterparts
   - Preserves component relationships and structure

3. **Text Handling**:
   - Reverses text alignment directions
   - Translates English text to Hebrew
   - Maintains original font properties
   - Removes Hebrew diacritical marks (nikkud) for cleaner typography

## Prerequisites

- **RTL Components**: Create RTL versions of your components with "-RTL" suffix
- **Design System Structure**: Ensure RTL components follow the same naming convention as LTR counterparts
- **Internet Connection**: Required for translation functionality

## Usage

1. **Select Elements**: Choose the frames, components, or component sets you want to convert
2. **Open Plugin**: Launch the Tidy Reverse Layout plugin
3. **Click RTL**: Press the RTL button in the plugin interface
4. **Review Results**: RTL versions will be created to the right of the original elements

## Error Handling

- If an RTL version of a component cannot be found, the plugin will:
  - Display a clear error message
  - Provide an option to navigate to the problematic element
  - Clean up any partially created RTL elements

## Best Practices

1. **Organize Components**: Keep RTL components in the same page as their LTR counterparts
2. **Naming Convention**: Always use the "-RTL" suffix for RTL components
3. **Test First**: Try the plugin on a single component before converting multiple elements
4. **Check Translations**: Review and adjust automatic translations as needed

## Troubleshooting

- **Missing RTL Components**: Ensure you've created RTL versions with exact naming convention
- **Translation Issues**: For critical text, consider pre-translating and avoiding automatic translation
- **Layout Problems**: Verify that your frames use Figma's layout system correctly

## Limitations

- Works only with Figma's layout system (auto layout)
- Requires internet connection for translation functionality
- RTL components must exist for all instances to be processed