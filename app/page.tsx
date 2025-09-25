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
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 2,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 3,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 4,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 5,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 1,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 2,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
                  },
                  {
                    id: 3,
                    name: "Карбонара",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/0195adb927fd7388a6496240b185adb6.avif",
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
