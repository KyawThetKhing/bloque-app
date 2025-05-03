const input = `🌊 Poseidon's Beard (legendary) - x8 - XP: 200, Gold: 130
🦀 Pinchy McSnapper (rare) - x34 - XP: 51, Gold: 33
🐠 Salmon-ella (uncommon) - x60 - XP: 25, Gold: 17
🐢 Shell Shocked (epic) - x25 - XP: 110, Gold: 58
🐡 Swim Shady (uncommon) - x64 - XP: 25, Gold: 16
🐉 Sea Serpent Jr. (epic) - x20 - XP: 95, Gold: 62
🐟 Bubble Trouble (common) - x52 - XP: 10, Gold: 7
🐟 Boople Snoot (common) - x71 - XP: 10, Gold: 5
🐟 Bass-ic Instinct (uncommon) - x62 - XP: 27, Gold: 15
🐟 Sir Fins-a-lot (uncommon) - x62 - XP: 24, Gold: 14
🦞 Snip Snap Lobsta (rare) - x30 - XP: 54, Gold: 31
🐙 Tentacool Dude (rare) - x46 - XP: 53, Gold: 30
🐟 Cod Almighty (uncommon) - x65 - XP: 28, Gold: 14
🐡 Puff Daddy (common) - x62 - XP: 12, Gold: 4
🦈 Baby Jaws (uncommon) - x65 - XP: 23, Gold: 18
🐠 Gill-ty Pleasure (uncommon) - x53 - XP: 26, Gold: 15
💎 Diamond Scales (legendary) - x8 - XP: 225, Gold: 135
🦑 Squidney Ink-man (rare) - x46 - XP: 52, Gold: 34
🐠 Derpy Dory (common) - x67 - XP: 10, Gold: 6
🐠 Splashy Boi (common) - x71 - XP: 9, Gold: 8
🐋 Chonky Bubbles (rare) - x53 - XP: 55, Gold: 28
🌋 Magma-rine (legendary) - x12 - XP: 215, Gold: 122
🦈 Great Byte (epic) - x19 - XP: 100, Gold: 63
🐟 Fishy McFishface (common) - x68 - XP: 11, Gold: 7
🐙 Octavio Stretch (rare) - x41 - XP: 49, Gold: 36
🐠 Scale-y Cat (common) - x79 - XP: 11, Gold: 6
🐡 Puffer P. Diddy (uncommon) - x54 - XP: 26, Gold: 16
🐊 Croccy Balboa (epic) - x17 - XP: 103, Gold: 60
🐠 Rainbow Trout-standing (epic) - x22 - XP: 102, Gold: 61
🐡 Blubber Nugget (common) - x67 - XP: 12, Gold: 5
🐬 Flipper McGee (rare) - x47 - XP: 48, Gold: 32
⚡ Thunder Fin (legendary) - x11 - XP: 205, Gold: 120
🦑 InkMaster Flash (rare) - x31 - XP: 50, Gold: 35
🐊 Snappers Delight (epic) - x13 - XP: 105, Gold: 59
🦭 Seal of Approval (epic) - x17 - XP: 97, Gold: 66
🦭 Lord of the Seals (epic) - x17 - XP: 98, Gold: 65
🐋 Moby Click (legendary) - x9 - XP: 210, Gold: 118
🐲 Nessie's Cousin (legendary) - x10 - XP: 195, Gold: 125
🐉 Loch Less Monster (legendary) - x6 - XP: 198, Gold: 128
🔱 Kraken Jr. (legendary) - x4 - XP: 220, Gold: 115
`

let totalXP = 0
let totalGold = 0
let totalQuantity = 0

const lines = input.trim().split('\n')

lines.forEach((line) => {
  const match = line.match(/- x(\d+) - XP: (\d+), Gold: (\d+)/)
  if (match) {
    const [, quantity, xp, gold] = match.map(Number)
    totalQuantity += quantity
    totalXP += quantity * xp
    totalGold += quantity * gold
  }
})

console.log('Current time:', new Date().toLocaleString())
console.log(`Total Quantity: ${totalQuantity}`)
console.log(`Total XP: ${totalXP}`)
console.log(`Total Gold: ${totalGold}`)
