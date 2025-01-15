
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"
  
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Link from "next/link";

const blogPosts = [
  {
    title: 'Revolutionizing Data Privacy and Cloud services with PINDORA',
    intro: 'The risk of personal data being misused — such as for training AI models — tells us how sensitive information are handled....',
    url: 'https://medium.com/@enigma13x/revolutionizing-data-privacy-and-cloud-services-with-pindora-c972c2742427',
  },
  {
    title: 'How Eclipse is Merging Solana’s Execution Speed with Ethereum’s Liquidity',
    intro: 'Eclipse is Ethereum’s first Layer 2 solution that integrates the Solana Virtual Machine (SVM) to combine Solana’s high execution speed with Ethereum’s....',
    url: 'https://medium.com/@enigma13x/how-eclipse-is-merging-solanas-execution-speed-with-ethereum-s-liquidity-caf1f03654d1',
  },
  {
    title: 'Exploring The BEVM Bitcoin L2 Solution',
    intro: 'Bitcoin, known for being the leading cryptocurrency for years lacked a robust Layer 2 (L2) solution....',
    url: 'https://medium.com/@enigma13x/exploring-the-bevm-bitcoin-l2-solution-7bcfffd09b64',
  },
  {
    title: 'FILLiquid Testnet Update: A Guide on How to Participate In The Final Lap Before Mainnet',
    intro: 'FILLiquid, the premier FVM-based decentralized lending protocol, is already preparing for the Mainnet launch....',
    url: 'https://medium.com/@enigma13x/filliquid-testnet-update-a-guide-on-how-to-participate-in-the-final-lap-before-mainnet-8ccfcf3d025a',
  },
  {
    title: 'Uncovering Common Myths Around Cryptocurrencies And Why Everyone Should Embrace Blockchain Technology',
    intro: 'What is your perception of cryptocurrencies? When you hear the word crypto, does it bring images of a high-stakes gamble or perhaps something only scammers use to hoodwink unsuspecting victims?...',
    url: 'https://medium.com/@enigma13x/uncovering-common-myths-around-cryptocurrencies-and-why-everyone-should-embrace-blockchain-b6fe7dcc2e84',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-center font-sans">My Blog</h1>
    <div className="grid grid-cols-1  gap-6">
      {blogPosts.map((post, index) => (
        <Card key={index} className=" rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <CardContent className="p-6 font-sans">
            <CardTitle className="text-xl font-semibold ">{post.title}</CardTitle>
            <CardDescription className="text-gray-400 mb-4">{post.intro}</CardDescription>
            <Button className="mt-4" color="primary">
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                Read More
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
  
  );
}