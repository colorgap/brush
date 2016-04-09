<?php namespace App\DataObjects\Common;

use Illuminate\Database\Eloquent\Model;

class Notification {
    function notify($message, $code, $type = "danger") {
        $this->message = $message;
        $this->code = $code;
        $this->type = $type;
    }
}
?>