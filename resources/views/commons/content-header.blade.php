<!-- Content Header (Page header) -->
@if (isset($title))
<section class="content-header header-border">
    <div class="row">
        <div class="col-md-8">
            <p style="font-size: 20px;">
                {{ $title }}<span>{{ $small }} Page</span>
            </p>
        </div>
        <div class="col-md-4">
            <ul class="list-inline text-right">
               <li><a href="{{ route('admin.get') }}"><i class="glyphicon glyphicon glyphicon-home"></i>管理者トップへ戻る</a></li>
               <li><a href="{{ route('top.get') }}" target="_blank"><i class="glyphicon glyphicon-cloud"></i>公開ページを確認</a></li>
            </ul>
        </div>
    </div>
</section>
@endif
