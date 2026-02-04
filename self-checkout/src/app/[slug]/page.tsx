import Image from "next/image"
import { notFound } from "next/navigation"

import { db } from "@/lib/prisma"

import ConsumptionMethodOption from "./components/Consumption-method-option"

interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params
    const restaurant = await db.restaurant.findUnique({ where: {slug: slug} });
    if (!restaurant) {
        return notFound()
    }
    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 pt-24 bg-white pb-5">
            {/* Logo e titulo */}
            <div className="flex flex-col items-center gap-2">
                <Image 
                  src={restaurant.avatarImageUrl} 
                  alt={restaurant?.name} 
                  width={82} 
                  height={82}
                />
                <h2 className="font-semibold">{restaurant.name}</h2>
            </div>
            {/* bem vindo */}
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibold">
                    Seja bem-vindo!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos a oferecer particularidade e sabor em cada detalhe
                </p>
            </div>
            <div className="pt-14 grid grid-cols-2 gap-4">
                <ConsumptionMethodOption 
                    slug={slug}
                    buttonText="Para comer aqui"
                    imageAlt="Comer aqui"
                    imageUrl="/dine_in.png"
                    option="DINE_IN"
                />
                <ConsumptionMethodOption 
                    slug={slug}
                    buttonText="Para levar"
                    imageAlt="Para levar"
                    imageUrl="/takeaway.png"
                    option="TAKEAWAY"
                />
            </div>
        </div>
    )
}
 
export default RestaurantPage;