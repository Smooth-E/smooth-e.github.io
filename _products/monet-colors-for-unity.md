---
latest_release: 2022-06-06
icon: /assets/products/monet-colors-for-unity/icon.png
banner: /assets/products/monet-colors-for-unity/banner.png
name: Monet Colors for Unity
description: Use Material You colors in Unity projects with this simple and customizable package.
sources:
    - github | https://github.com/Smooth-E/monet-colors-for-unity
    - itch   | https://smooth-e.itch.io/material-you-colors-for-unity
---

# Material You Colors for Unity

With help of this Unity package you will be able to use Material You colors in your projects. It implements several components to control colors of different UI elements. It also can be used in projects which are targeting API lower than 31 (Android 12), because it has a fallback palette for such cases.

## Usage

Import the package to your project. To do so, open a package manager tab, click the *plus* button on the left upper corner of it and select *Add package from git URL*. Then enter a git URL of this repository. You can then add components like `ImageMonetColorer` to your objects and select needed color with sliders on those components.

## Tweaking for your needs

Right now there are components implemented in this package for coloring the following UI elements:
- `Image`
- `Raw Image`
- `Outline`
- `Shadow`
- `Text`
- `Camera Background`

However, you can easily create *colorers* for any component you need. First of all, inherit you component from a `MonetColorer` base class, then override the `UpdateColor()` method as you want. Calling `base.UpdateColor()` will set the `_colorValue` and `_color` fields to a new values, when they are changed.

**Fallback palette.** If you want a custom fallback palette, customize [this file](https://github.com/Smooth-E/monet-colors-for-unity/blob/master/Runtime/FallbackColors.cs). Currently, there is no tool to create such file, but there are plans to make one. For now, you can use my [Previewer app](https://github.com/Smooth-E/monet-color-previewer) and edit its output by hand.

## Editor overview

<table>
    <tr>
        <td>
            <img src="/assets/products/monet-colors-for-unity/03.png" 
                 alt="Editor View Screenshot"
            >
        </td>
        <td>
            <img src="/assets/products/monet-colors-for-unity/04.png" 
                 alt="Editor View Screenshot"
            >
        </td>
    </tr>
    <tr>
        <td>
            <img src="/assets/products/monet-colors-for-unity/05.png" 
                 alt="Editor View Screenshot"
            >
        </td>
        <td>
            <img src="/assets/products/monet-colors-for-unity/06.png" 
                 alt="Editor View Screenshot"
            >
        </td>
    </tr>
    <tr>
        <td>
            <img src="/assets/products/monet-colors-for-unity/07.png" 
                 alt="Editor View Screenshot"
            >
        </td>
        <td>
            <img src="/assets/products/monet-colors-for-unity/08.png" 
                 alt="Editor View Screenshot"
            >
        </td>
    </tr>
</table>

## Licensing

This project is licensed under a [BSD 2-Clause "Simplified" License](https://github.com/Smooth-E/monet-colors-for-unity/blob/master/LICENSE.md), meaning you can use, edit and redistribute contents of this repository freely, but without any warranty, and you also should credit me as an author.

> Artwork used in this readme is taken from [Google Material Icon Library](https://fonts.google.com/icons?icon.set=Material+Icons).