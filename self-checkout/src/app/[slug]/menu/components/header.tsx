"use client"

import { Button } from "@/components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import Link from "next/link";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'coverImageUrl' | 'name' | 'slug'>
}

const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {
    const {toggleCart} = useContext(CartContext)
    const router = useRouter()
    const handleBackClick = () => router.back()
    return ( 
        <div className="relative h-[250px] w-full">
                <Button
                 variant="secondary" 
                 size="icon" 
                 className="absolute top-4 left-4 rounded-full z-50"
                 onClick={handleBackClick}
                >
                   <ChevronLeftIcon/>
                </Button>
                <Image
                 src={restaurant.coverImageUrl}
                 fill
                 alt={restaurant.name}
                 className="object-cover"
                />
                <Link
                 href={`/${restaurant.slug}/orders`}
                 className="absolute top-4 right-4 rounded-full z-50 bg-white p-2"
                >
                   <ScrollTextIcon/>
                </Link>
            </div>
     );
}
 
export default RestaurantHeader;