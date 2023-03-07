import Link from 'next/link';
import Image from 'next/image';
import Portrait from './../assets/natalie-portrait.png';

export default function About() {
  return (
    <div className="columns-2 gap-8">
      <div>
        <Image
          src={Portrait}
          width="300"
          className="w-full aspect-auto"
          />
      </div>
      <div>
        <h1 className="text-5xl">About</h1>
        <p>Natalie is a lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum pariatur incidunt et explicabo amet blanditiis, ea illum architecto quam odio, officiis dolor mollitia expedita! Reiciendis eum quos corrupti eaque!</p>
      </div>
    </div>
    
  )
}