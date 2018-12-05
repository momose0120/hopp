@extends('layouts.app')
@section('head_script')
<!-- jQuery Code executes on Date Format option ----->
<script>
$(function() {
    $("#datepicker").datepicker();
    //Pass the user selected date format
    $("#format").change(function() {
        $("#datepicker").datepicker("option", "dateFormat", $(this).val());
    });
});
</script>
<link rel="stylesheet" href="css/style.css">

@endsection
@section('content')

    <div class="container">
        <h2>jQuery Datepicker UI Example Form</h2>
        <div class="main">
            <form action="" method="post">
                <label>Name :</label>
                <input type="text" name="sname" id="Name" />
                <label>Date Of Birth :</label>
                <input type="text" name="selected_date" id="datepicker" />
                <label>Select Date Format :</label>
                <select id="format">
                    <option value="mm/dd/yy">Default - mm/dd/yyyy</option>
                    <option value="dd/mm/yy">dd/mm/yyyy</option>
                    <option value="yy-mm-dd">ISO 8601 - yyyy-mm-dd</option>
                    <option value="d M, y">Short - d M, y</option>
                    <option value="d MM, y">Medium - d MM, y</option>
                    <option value="DD, d MM, yy">Full - DD, d MM, yyyy</option>
                    <option value="&apos;day&apos; d &apos;of&apos; MM &apos;in the year&apos; yy">With text - 'day' d 'of' MM 'in the year' yyyy</option>
                </select>
                <input type="submit" id="submit" value="Submit">
            </form>
        </div>
    </div>
@endsection
