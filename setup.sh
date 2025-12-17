#!/bin/bash

# Soundify React - Quick Setup Script
# This script will help you get started with Soundify React

echo "🎵 Soundify React - Setup Script"
echo "================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org/"
    echo ""
    echo "After installing Node.js, run this script again."
    exit 1
else
    echo "✅ Node.js is installed: $(node --version)"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
else
    echo "✅ npm is installed: $(npm --version)"
fi

echo ""
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 You can now start the development server with:"
    echo "   npm start"
    echo ""
    echo "📖 For more information, see SETUP.md"
    echo ""
    
    read -p "Would you like to start the development server now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🎵 Starting Soundify React..."
        npm start
    fi
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above and try again."
    exit 1
fi
