<div class="col-md-8">

    <!-- box -->
    <div class="box box-default">
        <!-- header -->
        <div class="box-header with-border">
          <h3 class="box-title"><i class="glyphicon glyphicon-picture"></i> 保育所一覧</h3>

        </div>
        <!-- /header -->
        <!-- body -->
        <div class="box-body" style="padding: 30px;">

    @if (count($tenants) > 0)
    <?php $i = 1; ?>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>保育所名称</th>
                    <th>住所</th>
                    <th></th>
                </tr>
            </thead>
        <tbody>
            @foreach ($tenants as $tenant)
                <tr>
                    <th>{{ $i }}</th>
                    <td><img src="{{ asset("image/tenants/$tenant->main_image") }}"　 width="80" height="80" class="img-rounded image_fit_cover" alt="{{ $tenant->main_image_title }}"></td>
                    <td>{{ $tenant->name }}</td>
                    <td>{{ $tenant->address }}</td>
                    <?php
                        $address = $tenant->address ;
                        $address = urlencode($address);
                        $zoom = 15;
                        $url = "http://maps.google.co.jp/maps?q={$address}&z={$zoom}";
                    ?>
                    <td><a href="{{ $url }}" target="_blank">地図</a></td>
                    <td>
                    {!! Form::open(['route' => ['admin_tenants.edit', $tenant->id], 'method' => 'get']) !!}
                        {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                    <td>
                    {!! Form::open(['route' => ['admin_tenants.destroy', $tenant->id], 'method' => 'delete']) !!}
                        {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                    {!! Form::close() !!}
                    </td>
                </tr>
            <?php $i++; ?>
            @endforeach
        </tbody>
    </table>
    @endif
    {!! $tenants->render() !!}
</div>
<!-- /body -->
</div>
<!-- /box -->

</div>

<!--　削除確認メッセージ　-->
<script>
    $(function(){
        $(".btn-danger").click(function(){
            if(confirm("本当に削除しますか？")){
                // 削除処理。
            }else{
                return false;
            }
        });
    });
</script>
