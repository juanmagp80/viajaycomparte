import Image from 'next/image';


export default function Logo() {
    return (
        <Image
        src="../public/logoviaja.png"
        alt="logo"
        width={40}
        height={40}
        />
    );
    }