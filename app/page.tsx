import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size={"lg"} className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 2,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 3,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 4,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 5,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 2,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                  {
                    id: 3,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee7d5f23324124bbc5bdc88742f3bf.avif",
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
