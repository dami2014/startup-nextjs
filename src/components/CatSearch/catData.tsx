// src/data/catNames.tsx

export interface CatName {
  name: string;
  categories: string[]; // e.g. ["Female","Grey","Cute","Japanese"]
  description: string;
  slug?: string;
}

export const CAT_NAMES: CatName[] = [
  { name: "Luna", categories: ["Female", "Grey", "Elegant"], description: "Luna means 'moon' — perfect for a graceful female cat with silvery-grey fur.", slug: "luna" },
  { name: "Shadow", categories: ["Male", "Black", "Mysterious"], description: "Shadow evokes stealth and mystery; ideal for a sleek black tom.", slug: "shadow" },
  { name: "Mochi", categories: ["Unisex", "White", "Cute", "Japanese"], description: "Mochi (a sweet rice cake) suggests softness and cuddliness — great for a plump white kitten.", slug: "mochi" },
  { name: "Tiger", categories: ["Male", "Tabby", "Bold"], description: "Tiger suggests strength and bold stripes — suits a confident tabby.", slug: "tiger" },
  { name: "Neko", categories: ["Unisex", "Japanese", "Playful"], description: "Neko simply means 'cat' in Japanese — short, cultural, and playful.", slug: "neko" },
  { name: "Cinnamon", categories: ["Female", "Orange", "Warm"], description: "Cinnamon carries a warm color image — perfect for an orange-toned female.", slug: "cinnamon" },
  { name: "Snowball", categories: ["Male", "White", "Playful"], description: "Snowball is cute and bouncy — ideal for a lively white kitten.", slug: "snowball" },
  { name: "Onyx", categories: ["Male", "Black", "Cool"], description: "Onyx conveys a glossy black gemstone — elegant and cool.", slug: "onyx" },
  { name: "Willow", categories: ["Female", "Grey", "Gentle"], description: "Willow evokes a graceful tree — fits a calm, slender cat.", slug: "willow" },
  { name: "Pumpkin", categories: ["Female", "Orange", "Cute", "Seasonal"], description: "Pumpkin is warm and seasonal — great for autumn-adopted orange cats.", slug: "pumpkin" },
  { name: "Salem", categories: ["Male", "Black", "Spooky", "Witchy"], description: "Salem has a witchy vibe, often used for black cats with a touch of mystery.", slug: "salem" },
  { name: "Maple", categories: ["Female", "Brown", "Warm"], description: "Maple suggests cozy browns and autumn tones — nice for warm-coated cats.", slug: "maple" },
  { name: "Pixel", categories: ["Unisex", "Cute", "Techy"], description: "Pixel is playful and modern — great for small, curious kittens.", slug: "pixel" },
  { name: "Cocoa", categories: ["Female", "Brown", "Sweet"], description: "Cocoa is sweet and soft — fits a chocolate-toned cat.", slug: "cocoa" },
  { name: "Apollo", categories: ["Male", "Elegant", "Mythology"], description: "Apollo brings heroic, mythological flair — good for a proud male cat.", slug: "apollo" },
  { name: "Ginger", categories: ["Female", "Orange", "Friendly"], description: "Ginger is classic for orange cats — warm and approachable.", slug: "ginger" },
  { name: "Mocha", categories: ["Unisex", "Brown", "Calm"], description: "Mocha evokes coffee tones and calm personality — good for mellow cats.", slug: "mocha" },
  { name: "Poppy", categories: ["Female", "Bright", "Cute"], description: "Poppy is cheerful and bright — suits an outgoing female kitten.", slug: "poppy" },
  { name: "Smokey", categories: ["Male", "Grey", "Laidback"], description: "Smokey fits grey, relaxed cats — hints at soft smoky fur.", slug: "smokey" },
  { name: "Saffron", categories: ["Female", "Exotic", "Orange"], description: "Saffron is exotic and fragrant — great for a striking orange female.", slug: "saffron" },
  { name: "Zephyr", categories: ["Male", "Cool", "Unique"], description: "Zephyr means gentle breeze — good for an agile, graceful tom.", slug: "zephyr" },
  { name: "Biscuit", categories: ["Unisex", "Cute", "Food"], description: "Biscuit is warm and comforting — fits round, friendly cats.", slug: "biscuit" },
  { name: "Orion", categories: ["Male", "Mythology", "Cool"], description: "Orion is celestial and strong — great for a majestic male cat.", slug: "orion" },
  { name: "Pearl", categories: ["Female", "White", "Elegant"], description: "Pearl evokes luster and rarity — perfect for a delicate white female.", slug: "pearl" },
  { name: "Thor", categories: ["Male", "Bold", "Mythology"], description: "Thor is strong and short — ideal for a muscular tom.", slug: "thor" },
  { name: "Pixel", categories: ["Unisex", "Cute", "Tech"], description: "Pixel — small, curious, and modern. (Also appears above intentionally as a common cute name.)", slug: "pixel-2" },
  { name: "Fauna", categories: ["Female", "Nature", "Unique"], description: "Fauna suggests nature and life — a poetic name for a soft-natured cat.", slug: "fauna" },
  { name: "Beans", categories: ["Unisex", "Funny", "Small"], description: "Beans is playful and silly — great for a tiny, mischievous kitten.", slug: "beans" },
  { name: "Kuro", categories: ["Male", "Black", "Japanese"], description: "Kuro means 'black' in Japanese — stylish, short, and cultural.", slug: "kuro" },
];
