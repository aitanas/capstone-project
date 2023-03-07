import Link from 'next/link';
import Image from 'next/image';
import Portrait from './../assets/natalie-portrait.png';

export default function About() {
  return (
    <div className="columns-2">
      <div>
        <Image
          src={Portrait}
          width="300"
          className=""
          />
      </div>
    </div>
    
  )
}