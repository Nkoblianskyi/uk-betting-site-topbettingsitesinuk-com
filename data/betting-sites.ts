export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "spreadex",
    name: "Spreadex Sports",
    logo: "/spreadex.webp",
    score: 9.8,
    bonus: "Bet £10 Get £60",
    features: ["Live Streaming", "In-Play", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "Bank Transfer"],
    link: "https://www.spreadex.com/sports/en-GB/spread-betting",
    reviews: 4721,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    score: 9.7,
    bonus: "Bet £10 Get £50",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com",
    reviews: 3892,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    score: 9.6,
    bonus: "Bet £10 Get £20 + 50 Free Spins",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 4256,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    score: 9.5,
    bonus: "Bet £5 Get £20",
    features: ["Live Betting", "Cash Out", "Best Odds"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://sports.ladbrokes.com/",
    reviews: 4987,
  },
  {
    id: "livescorebet",
    name: "LiveScoreBet",
    logo: "/livescorebet.png",
    score: 9.4,
    bonus: "Bet £10 Get £50",
    features: ["Live Betting", "In-Play Stats", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.livescorebet.com/uk/",
    reviews: 3164,
  },
  {
    id: "betfred",
    name: "BetFred",
    logo: "/betfred.webp",
    score: 9.3,
    bonus: "Bet £10 Get £50",
    features: ["Fast Payouts", "Best Odds", "Live Streaming"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com",
    reviews: 3645,
  },
  {
    id: "mrplay",
    name: "Mr.Play",
    logo: "/mr-play2.png",
    score: 9.2,
    bonus: "Bet £10 Get £10",
    features: ["Casino & Sports", "UK Market", "Simple UX"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://uk.mrplay.com/",
    reviews: 4523,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    score: 9.1,
    bonus: "Bet £10 Get £30 + £10 Casino Bonus",
    features: ["UK Presence", "Football Specials", "Local Support"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.boylesports.com",
    reviews: 2874,
  },
  {
    id: "betiton",
    name: "Betiton",
    logo: "/betiton.png",
    score: 9.0,
    bonus: "Bet £15 Get £10",
    features: ["UK Focus", "Best Prices", "Mobile App"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betiton.com/en-ie/sport/",
    reviews: 3397,
  },
]
