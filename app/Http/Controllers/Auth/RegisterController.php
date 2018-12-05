<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    // protected $redirectTo = '/admin';
    protected function redirectTo()
    {
        return '/users';
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:20',
            'login_id' => 'required|string|max:20|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'image' => 'image|max:2000',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if (isset($data['image'])){
            $imageName = str_shuffle(time());
            $data['image']->move(public_path() . '/image/admins', $imageName);

            return User::create([
                'department' => $data['department'],
                'name' => $data['name'],
                'login_id' => $data['login_id'],
                'image' => $imageName,
                'password' => Hash::make($data['password']),
            ]);
        } else {
            $imageName = 'sample.jpeg';

            return User::create([
                'department' => $data['department'],
                'name' => $data['name'],
                'login_id' => $data['login_id'],
                'password' => Hash::make($data['password']),
                'image' => $imageName,
            ]);
        }
    }
}
