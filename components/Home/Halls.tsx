"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import Image from "next/image";

interface Hall {
  id: number;
  name: string;
  capacity: number;
  image: string;
}

const halls: Hall[] = [
  { id: 1, name: "Seminar Hall 1", capacity: 150, image: "/images/room1.jpg" },
  { id: 2, name: "Seminar Hall 2", capacity: 150, image: "/images/room2.jpg" },
  { id: 3, name: "Seminar Hall 3", capacity: 300, image: "/images/room3.jpg" },
  // { id: 4, name: "Seminar Hall 4", capacity: 300, image: "/images/room4.jpg" },
];

export default function Halls() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Seminar Halls
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Host impactful events and inspiring sessions in our fully equipped
            seminar halls.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {halls.map((hall) => (
            <Card key={hall.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={hall.image || "/placeholder.svg"}
                    alt={hall.name}
                    fill
                    className="object-cover aspect-video"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{hall.name}</CardTitle>
                <Badge variant="secondary" className="mb-4">
                  <Users className="w-4 h-4 mr-1" />
                  Capacity: {hall.capacity}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
