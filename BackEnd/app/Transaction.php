<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    public $table = "Transaction";
    public $primaryKey = "id";
    public $timestamps = false;
}
