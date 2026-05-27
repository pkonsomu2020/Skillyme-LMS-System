const fs = require('fs');
const path = require('path');

const applyPath = path.join(__dirname, 'src', 'pages', 'Apply.tsx');
let content = fs.readFileSync(applyPath, 'utf8');

// Replace standard colors
content = content.replace(/text-\[\#111827\]/g, 'text-white');
content = content.replace(/text-\[\#6B7280\]\/70/g, 'text-white/50');
content = content.replace(/text-\[\#6B7280\]\/60/g, 'text-white/50');
content = content.replace(/text-\[\#6B7280\]/g, 'text-white/70');
content = content.replace(/border-\[\#111827\]\/12/g, 'border-white/10');
content = content.replace(/border-\[\#111827\]\/08/g, 'border-white/10');
content = content.replace(/border-\[\#111827\]\/25/g, 'border-white/20');
content = content.replace(/border-\[\#3730A3\]\/50/g, 'border-primary/50');
content = content.replace(/border-\[\#3730A3\]\/40/g, 'border-primary/40');
content = content.replace(/border-\[\#3730A3\]/g, 'border-primary');
content = content.replace(/bg-\[\#3730A3\]/g, 'bg-primary');
content = content.replace(/bg-\[\#EEF2FF\]/g, 'bg-primary/20');
content = content.replace(/bg-\[\#F8F7FF\]/g, 'bg-surface-alt/40');
content = content.replace(/bg-white/g, 'bg-surface-card');

// Update Hero Header
content = content.replace('className="min-h-screen bg-surface-alt/40"', 'className="min-h-screen city-bg flex flex-col"');
content = content.replace('<div className="city-bg px-6 pt-10 pb-14">', '<div className="px-6 pt-10 pb-14 relative z-10">');
content = content.replace('<div className="max-w-2xl mx-auto px-4 -mt-8 pb-16">', '<div className="max-w-2xl mx-auto px-4 -mt-8 pb-16 relative z-10">');

// Update Form container and Section header
content = content.replace(
  'className="bg-surface-card border border-white/10 shadow-card px-6 py-4 mb-0.5 flex items-center justify-between"',
  'className="bg-surface-card/80 backdrop-blur-md border border-white/10 shadow-card px-6 py-4 mb-0.5 flex items-center justify-between rounded-t-lg"'
);
content = content.replace(
  'className="bg-surface-card border border-white/10 shadow-card px-6 py-8 space-y-6"',
  'className="bg-surface-card/80 backdrop-blur-md border border-white/10 shadow-card px-6 py-8 space-y-6 rounded-b-lg"'
);

// Progress bar updates
content = content.replace('bg-white/10 mb-1', 'bg-white/5 mb-1');

// Radio Group updates
content = content.replace("style={{ borderRadius: '50%' }}", ""); // remove inline style if any, replace with rounded-full
content = content.replace("style={{ borderRadius: '50%' }}", "");

content = content.replace(/w-4 h-4 border-2 flex items-center justify-center flex-shrink-0/g, 'w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 rounded-full');
content = content.replace(/w-2 h-2 bg-primary/g, 'w-2 h-2 bg-primary rounded-full');

// Add theme="dark" to all Input and Textarea
content = content.replace(/<Input /g, '<Input theme="dark" ');
content = content.replace(/<Textarea\n/g, '<Textarea theme="dark"\n');
content = content.replace(/<Textarea /g, '<Textarea theme="dark" ');

fs.writeFileSync(applyPath, content);
console.log('Done replacing Apply.tsx');
