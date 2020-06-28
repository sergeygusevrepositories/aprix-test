<?php

class Tools {

    public static function addCommenToOrder($order_id) {
        Bitrix\Main\Loader::includeModule('sale');

        $order = \Bitrix\Sale\Order::load($order_id);
        $order->setField("USER_DESCRIPTION", "Доставить к подъезду");

        $shipmentCollection = $order->getShipmentCollection();

        /** @var Sale\Shipment $shipment */

        foreach ($shipmentCollection as $shipment) {
            if (!$shipment->isSystem())
                $shipment->allowDelivery();
        }

        $result = $order->save();
        if (!$result->isSuccess()) {
            $result->getErrors();
        }
    }

    public static function test($par) {
        return $par;
    }

}