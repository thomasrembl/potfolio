import Image from "next/image";
import { Link } from "../../navigation";
interface SocialProps {
  size: number;
}
const Social = ({ size }: SocialProps) => {
  return (
    <div className="social-link">
      <Link href="https://www.behance.net/thomasremblier" target="_blank">
        <Image src="/behance.svg" alt="behance" width={size} height={size} />
      </Link>
      <Link href="https://twitter.com/Kc_Thomaaas" target="_blank">
        <Image src="/twitter.svg" alt="twitter" width={size} height={size} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/thomas-remblier-a9805a220/"
        target="_blank"
      >
        <Image src="/linkedin.svg" alt="linkedin" width={size} height={size} />
      </Link>
      <Link href="https://github.com/thomasrembl" target="_blank">
        <Image src="/github.svg" alt="github" width={size} height={size} />
      </Link>
      <Link href="https://www.instagram.com/remblier.psd/" target="_blank">
        <Image
          src="/instagram.svg"
          alt="instagram"
          width={size}
          height={size}
        />
      </Link>
    </div>
  );
};

export default Social;
