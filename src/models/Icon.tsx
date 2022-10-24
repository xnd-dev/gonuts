import { MapPin, MapPinLine, Trash, CurrencyDollar,ShoppingCart, Timer, Package,Coffee, Plus, Minus, CreditCard, Money, Bank, CookingPot, PawPrint, Gauge } from "phosphor-react";

export interface IconTypesInterface {
    MapPin           ?:JSX.Element,
    MapPinLine       ?:JSX.Element,
    Trash            ?:JSX.Element,
    CurrencyDollar   ?:JSX.Element,
    ShoppingCart     ?:JSX.Element,
    Timer            ?:JSX.Element,
    package          ?:JSX.Element,
    Plus             ?:JSX.Element,
    Minus            ?:JSX.Element,
    CreditCard       ?:JSX.Element,
    Money            ?:JSX.Element,
    Bank             ?:JSX.Element,
    cookingPot      ?:JSX.Element,
    pawPrint        ?:JSX.Element,
    gauge            ?:JSX.Element
}

export const iconTypes: IconTypesInterface = {
    MapPin           : <MapPin weight="fill" />,
    MapPinLine       : <MapPinLine />,
    Trash            : <Trash />,
    CurrencyDollar   : <CurrencyDollar />,
    ShoppingCart     : <ShoppingCart  weight="fill" />,
    Timer            : <Timer   weight="fill" />,
    package          : <Package  weight="fill" />,
    Plus             : <Plus  weight="fill" />,
    Minus            : <Minus  weight="fill" />,
    CreditCard       : <CreditCard />,
    Money            : <Money />,
    Bank             : <Bank /> ,
    cookingPot       : <CookingPot weight="fill" /> ,
    pawPrint         : <PawPrint weight="fill" /> ,
    gauge            : <Gauge weight="fill" />     
}
