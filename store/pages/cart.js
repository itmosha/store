import React from 'react';
import { useStateContext } from "../context/StateContext";
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import CommonHeader from "../components/CommonHeader";
import Footer from "../components/Footer";
import ItemInCart from "../components/ItemInCart";
import SPbDeliveryForm from "../components/forms/SPbDeliveryForm";
import {
    Box,
    Flex,
    Heading,
    VStack,
    Button,
    Input,
    Checkbox,
    Stack, Text, Divider, InputGroup, InputLeftAddon
} from '@chakra-ui/react';

const CartPage = () => {
    const { totalPrice, totalQuantity, cartItems, toggleCartItemQuantity, onRemove, deliveryRussia, toggleDeliveryRussia, deliverySPb, toggleDeliverySPb } = useStateContext();

    const { register, handleSubmit, formState: {isSubmitting} } = useForm();
    const [ checkedCheckbox, setCheckedCheckbox ] = React.useState(1);

    async function saveFormDataSPb(data) {
        return await fetch("/api/delivery-SPb", {
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            method: "POST"
        });
    }

    async function saveFormDataRussia(data) {
        return await fetch("/api/delivery-Russia", {
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            method: "POST"
        });
    }

    return (
        <Box>
            <CommonHeader />
            <Box minH={'85vh'} p={'2rem'}>
                { cartItems.length >= 1 ? (
                    <Box>
                        <Box align={'center'}>
                            <Heading fontSize={'2rem'} pb={'1.5rem'}>Оформление заказа</Heading>
                        </Box>
                        <Flex mx={'22vw'}>
                            <Box p={'1rem'} borderRadius={'1rem'} h={'fit-content'} w={'30vw'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                <Heading fontSize={'1.5rem'}>Список товаров</Heading>
                                <Box>
                                    { cartItems.length >= 1 && cartItems.map((item) => (
                                        <ItemInCart item={item} />
                                    ))}
                                </Box>
                            </Box>
                            <Box ml={'1rem'} width={'21vw'}>
                                <Box p={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'0.5rem'}>Способ доставки: </Heading>
                                    <Stack spacing={'0.25rem'}>
                                        <Checkbox colorScheme={'red'} defaultChecked
                                                  isChecked={ checkedCheckbox === 1 }
                                                  onChange={ () => setCheckedCheckbox(1) }
                                        >Курьером по Санкт-Петербургу</Checkbox>
                                        <Checkbox colorScheme={'red'}
                                                  isChecked={ checkedCheckbox === 2 }
                                                  onChange={ () => setCheckedCheckbox(2) }
                                        >Курьерской службой СДЭК</Checkbox>
                                        <Checkbox colorScheme={'red'}
                                                  isChecked={ checkedCheckbox === 3 }
                                                  onChange={ () => setCheckedCheckbox(3) }
                                        >Почтой России</Checkbox>
                                    </Stack>
                                </Box>
                                <Box p={'1rem'} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'0.5rem'}>Сумма заказа</Heading>
                                    <Flex justify={'space-between'}>
                                        <Text>Товары</Text>
                                        <Text>{ totalPrice } ₽</Text>
                                    </Flex>
                                    <Flex justify={'space-between'}>
                                        <Text>Доставка</Text>
                                        { checkedCheckbox === 1 ? (
                                            <Text>100 ₽</Text>
                                        ) : (
                                            <Text>0 ₽</Text>
                                        )}
                                    </Flex>
                                    <Divider borderColor={'gray.500'} my={'0.5rem'}/>
                                    <Flex justify={'space-between'}>
                                        <Heading fontSize={'1rem'}>Итого</Heading>
                                        <Heading fontSize={'1rem'}>{ totalPrice + (checkedCheckbox === 1 ? 100 : 0)} ₽</Heading>
                                    </Flex>
                                </Box>
                                <Box p={'1rem'} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'1rem'}>Информация клиента</Heading>
                                    { checkedCheckbox === 1 ? (
                                        <SPbDeliveryForm />
                                        ) : (
                                        <Heading fontSize={'1.5rem'}>Данные</Heading>
                                    )}
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                ) : (
                    <Box bgColor={'gray.200'} w={'32vw'} p={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} mx={'33vw'}>
                        <Heading fontSize={'1.25rem'}>Список товаров пуст.</Heading>
                        <Heading fontSize={'1.25rem'}>Перейдите в каталог чтобы добавить товары</Heading>
                        <Link href={'/'}>
                            <Button variant={'solid'} colorScheme={'red'} w={'16rem'} m={'1.5rem 7rem 0.5rem 7rem'}>
                                Перейти в каталог
                             </Button>
                        </Link>
                    </Box>
                )}
            </Box>
            <Footer />
        </Box>
        // <div className="cart-page">
        //     <div className="cart-product-container">
        //         <h1>Оформление заказа</h1>
        //         <div className="cart-product-items">
        //             <h2>Список товаров</h2>
        //         { cartItems.length >= 1 ? cartItems.map((item) => (
        //             <div className="product" key={item.slug}>
        //                 <img src={ item.images[0]?.image ? item.images[0].image : DefaultPresentImage.src } className="cart-product-image" />
        //                 <div className="item-desc">
        //                     <div className="flex top">
        //                         <h5>{ item.title }</h5>
        //                         <h4>₽ { item.price }</h4>
        //                     </div>
        //                     <div className="flex bottom">
        //                         <div>
        //                             <p className="quantity-desc">
        //                                 <span className="minus" onClick={ () => toggleCartItemQuantity(item.slug, 'dec') }><AiOutlineMinus /></span>
        //                                 <span className="num">{ item.quantity }</span>
        //                                 <span className="plus" onClick={ () => toggleCartItemQuantity(item.slug, 'inc') }><AiOutlinePlus /></span>
        //                             </p>
        //                         </div>
        //                         <button type="button" className="remove-item" onClick={ () => onRemove(item) }>
        //                             <TiDeleteOutline />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         )) :
        //             <div className="cart-empty">
        //                 <p>Список товаров пуст. Перейдите в каталог чтобы добавить товары</p>
        //                 <Link href="/">
        //                     <button className="go-to-items">
        //                         Перейти в каталог
        //                     </button>
        //                 </Link>
        //             </div>
        //         }
        //         </div>
        //
        //         { cartItems.length >= 1 && (
        //         <div className="cart-product-info">
        //             <div className="cart-product-delivery">
        //
        //                 <h2>Способ доставки:</h2>
        //
        //                 <div className="checkbox-wrapper">
        //                     <label>
        //                         <input
        //                             type="checkbox"
        //                             checked={ deliveryRussia }
        //                             onChange={ () => toggleDeliveryRussia() }
        //                         />
        //                         <svg
        //                             className={ `checkbox ${ deliveryRussia ? "checkbox--active": "" }` }
        //                             aria-hidden="true"
        //                             viewBox="0 0 15 11"
        //                             fill="none"
        //                         >
        //                             <path
        //                                 d="M1 4.5L5 9L14 1"
        //                                 strokeWidth="2"
        //                                 stroke={ deliveryRussia ? "#fff" : "none" }
        //                             />
        //                         </svg>
        //                         Доставка Почтой России
        //                     </label>
        //                 </div>
        //
        //                 <div className="checkbox-wrapper">
        //                     <label>
        //                         <input
        //                             type="checkbox"
        //                             checked={ deliverySPb }
        //                             onChange={ () => toggleDeliverySPb() }
        //                         />
        //                         <svg
        //                             className={ `checkbox ${ deliverySPb ? "checkbox--active" : "" }` }
        //                             aria-hidden="true"
        //                             viewBox="0 0 15 11"
        //                             fill="none"
        //                         >
        //                             <path
        //                                 d="M1 4.5L5 9L14 1"
        //                                 strokeWidth="2"
        //                                 stroke={ deliverySPb ? "#fff" : "none"}
        //                             />
        //                         </svg>
        //                         Доставка курьером по Санкт-Петербургу
        //                     </label>
        //                 </div>
        //             </div>
        //
        //             { (deliverySPb || deliveryRussia) && (
        //                 <div className="cart-product-cost">
        //                     <h2>Ваш заказ</h2>
        //                     {deliverySPb && (
        //                         <div>
        //                             <div className="price-tag">
        //                                 <span>Сумма заказа:</span>
        //                                 <span>{totalPrice} ₽</span>
        //                             </div>
        //                             <div className="price-tag">
        //                                 <span>Стоимость доставки:</span>
        //                                 <span>100 ₽</span>
        //                             </div>
        //                             <div className="summary-price">
        //                                 <span>Итого:</span>
        //                                 <span>{totalPrice + 100} ₽</span>
        //                             </div>
        //                         </div>
        //                     )}
        //                     {deliveryRussia && (
        //                         <div>
        //                             <div className="price-tag">
        //                                 <span>Сумма заказа:</span>
        //                                 <span>{totalPrice} ₽</span>
        //                             </div>
        //                             <div className="price-tag">
        //                                 <span>Стоимость доставки:</span>
        //                                 <span>200 ₽</span>
        //                             </div>
        //                             <div className="summary-price">
        //                                 <span>Итого:</span>
        //                                 <span>{totalPrice + 200} ₽ </span>
        //                             </div>
        //                         </div>
        //                     )}
        //                 </div>
        //             ) }
        //             { deliverySPb && (
        //                 <div className="client-info">
        //                     <h2>Данные для доставки</h2>
        //
        //                    <form onSubmit={handleSubmit(saveFormDataSPb)}>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Фамилия'}
        //                                required={true}
        //                                {...register("familiya", {required: true})}
        //                            />
        //                        </div>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Имя'}
        //                                required={true}
        //                                {...register("name", {required: true})}
        //                            />
        //                        </div>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Отчество'}
        //                                {...register("otchestvo", {required: false})}
        //                            />
        //                        </div>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Email'}
        //                                {...register("email", {required: false})}
        //                            />
        //                        </div>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Номер телефона'}
        //                                required={true}
        //                                {...register("phone", {required: true})}
        //                            />
        //                        </div>
        //                        <div className="client-info-field">
        //                            <input
        //                                placeholder={'Адрес доставки'}
        //                                required={true}
        //                                {...register("address", {required: true})}
        //                            />
        //                        </div>
        //                        <button disabled={isSubmitting} className="client-info-submit">
        //                            {isSubmitting ? "Подождите..." : "Оплатить"}
        //                        </button>
        //                    </form>
        //                 </div>
        //             ) }
        //             { deliveryRussia && (
        //                 <div className="client-info">
        //                     <h2>Данные для доставки</h2>
        //
        //                     <form onSubmit={handleSubmit(saveFormDataRussia)}>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Фамилия'}
        //                                 required={true}
        //                                 {...register("familiya", {required: true})}
        //                             />
        //                         </div>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Имя'}
        //                                 required={true}
        //                                 {...register("name", {required: true})}
        //                             />
        //                         </div>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Отчество'}
        //                                 {...register("otchestvo", {required: false})}
        //                             />
        //                         </div>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Email'}
        //                                 {...register("email", {required: false})}
        //                             />
        //                         </div>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Номер телефона'}
        //                                 required={true}
        //                                 {...register("phone", {required: true})}
        //                             />
        //                         </div>
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Почтовый индекс'}
        //                                 required={true}
        //                                 {...register("index", {required: true})}
        //                             />
        //                         </div>
        //
        //                         <div className="client-info-field">
        //                             <input
        //                                 placeholder={'Почтовый адрес'}
        //                                 required={true}
        //                                 {...register("address", {required: true})}
        //                             />
        //                         </div>
        //
        //                         <button disabled={isSubmitting} className="client-info-submit">
        //                             {isSubmitting ? "Подождите..." : "Оплатить"}
        //                         </button>
        //                     </form>
        //                 </div>
        //
        //             ) }
        //         </div>
        //         )}
        //     </div>
        // </div>
    );
};

export default CartPage;