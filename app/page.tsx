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
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 2,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 3,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 4,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 5,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 2,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
                  },
                  {
                    id: 3,
                    name: "Test Product",
                    price: 550,
                    items: [{ price: 550 }],
                    imageUrl: "/static/000D3A39D824A82E11E9AFA6B0FFC349.png",
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
