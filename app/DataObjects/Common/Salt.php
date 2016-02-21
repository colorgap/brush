<?php namespace App\DataObjects\Common;

use Illuminate\Database\Eloquent\Model;

class Salt
{
   function spiceItUp($text,$length=10) 
   {
       return str_shuffle($text) . substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length) . date("m/d/Y");
   }
}
?>