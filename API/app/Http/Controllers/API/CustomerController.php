<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function store(Request $request)
    {
        $customer = new Customer;
        $customer->user_name = $request->input('name');
        $customer->user_address = $request->input('address');
        $customer->user_dob = $request->input('dob');
        $customer->user_mob = $request->input('contact_number');
        $customer->user_email = $request->input('email');
        $customer->user_password = $request->input('passwoard');
        $customer->save();

        return response()->json([
            'status' => 200,
            'message' => 'Registation form Submitted',
        ]);
    }
}
