import { Image, Link } from "@chakra-ui/react";

export function Logo() {
    return (
        <Link href="/" color="black">
            <Image src="/assets/images/logo-alvastore.svg" alt="logo AlvaStore" boxSize="240px" />
        </Link>
    );
}