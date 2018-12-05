<?php
use App\Contact;
use App\Recruit;

if (!function_exists('contact_count')) {
    function contact_count(){
        $contact = Contact::where('progress', '0')->orwhere('progress', '1')->get();
        return count($contact);
    }
}

if (!function_exists('contact_all_count')) {
    function contact_all_count(){
        $contact = Contact::where('archive', '0')->orderBy('updated_at', 'desc')->get();
        return count($contact);
    }
}

if (!function_exists('contact_archive_count')) {
    function contact_archive_count(){
        $contact = Contact::where('archive', '1')->orderBy('updated_at', 'desc')->get();
        return count($contact);
    }
}

if (!function_exists('recruit_all_count')) {
    function recruit_all_count(){
        $recruit = Recruit::where('archive', '0')->orderBy('updated_at', 'desc')->get();
        return count($recruit);
    }
}

if (!function_exists('recruit_archive_count')) {
    function recruit_archive_count(){
        $recruit = Recruit::where('archive', '1')->orderBy('updated_at', 'desc')->get();
        return count($recruit);
    }
}
