import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { lexendGiga } from "../ui/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#3185FC] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left side */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className={`text-2xl  ${lexendGiga.className} font-bold text-gradient`}>Alma Mater</h2>
            <p className="text-sm text-gray-600 mb-2">Pre SIH 2024</p>
            <img
              src="https://wuelev8-user-bucket-prod.s3-ap-south-1.amazonaws.com/SIH_logo_2024_horizontal1724405745636.png"
              alt="Hackathon Logo"
              className="mx-auto md:mx-0"
              width={150}
              height={50}
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-200 mb-2">A project by Response-201</p>
            <p className="text-sm text-gray-200 mb-4">Built with ❤️ in 48 hours</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="https://github.com/Satyam-Chaudhary/alma-mater" className="text-gray-600 hover:text-gray-800">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}