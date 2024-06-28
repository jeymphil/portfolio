import React from 'react';
import { Plus } from 'lucide-react'; // Adjust the import path accordingly
import { Card } from './ui/card'; // Adjust the import path accordingly
import Image from 'next/image';

interface ImageCardProps {
    src: string;
    showPlusIcon?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, showPlusIcon }) => {
    return (
        <Card
            className={`relative h-full flex items-center justify-center ${showPlusIcon ? 'hover:rotate-parent overflow-hidden' : ''}`}
        >
            {showPlusIcon && (
                <Plus className="absolute transform transition-transform duration-300 z-10 " />
            )}
            <Image
                src={src}
                alt="Card content"
                width={100}
                height={100}
                className="h-full w-full object-cover rounded-md object-center backdrop-blur-lg blur-[1px] hover:blur-none"
                unoptimized
            />
        </Card>
    );
};

export default ImageCard;
