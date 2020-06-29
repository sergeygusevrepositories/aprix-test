<?php

class Tools {

    public static function addCommenToOrder($order_id, $comment = "") {
        Bitrix\Main\Loader::includeModule('sale');

        $order = \Bitrix\Sale\Order::load($order_id);
        $order->setField("COMMENTS", $comment);

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