import { PhoneInfo } from "../types";
import { PaginationModel } from "../types/pagination";

const getAll = (paginationModel: PaginationModel ) => {
  return generatePhoneInfoArray(paginationModel);
}

export const ProductsService = {
  getAll,
};

function generatePhoneInfoArray(paginationModel: PaginationModel): Promise<PhoneInfo[]> {
  return new Promise((resolve) => {
    const phoneInfoArray: PhoneInfo[] = [];
    let newId = ++paginationModel.offset;

    for(let i = 0; i < paginationModel.limit; i++, newId++) {
      const phone = {
        id: newId,
        category: `Category ${newId}`,
        phoneId: 'phoneId1',
        itemId: 'itemId1',
        name: `Phone ${newId}`,
        fullPrice: 1000,
        price: 900,
        screen: '6.2"',
        capacity: '128GB',
        color: 'Black',
        ram: '4GB',
        year: 2022,
        image: 'https://images.prom.ua/3498626570_w200_h200_mobilnyj-telefon-smartfon.jpg',
      };
      phoneInfoArray.push(phone);
    }

    resolve(phoneInfoArray);
  });
}
