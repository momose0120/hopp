<div class="col-md-offset-1 col-md-6">
    <!-- box -->
    <div class="box box-default">
        <!-- header -->
        <div class="box-header with-border">
          <h3 class="box-title"><i class="glyphicon glyphicon-question-sign"></i> 分類一覧</h3>

        </div>
        <!-- /header -->
        <!-- body -->
        <div class="box-body" style="padding: 30px;">
                @if (count($categorys) > 0)
                <?php $i = 1; ?>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>分類</th>
                                <th>表示順位</th>
                                <th>更新日</th>
                            </tr>
                        </thead>
                    <tbody>
                        @foreach ($categorys as $category)
                            <tr>
                                <th>{{ $i }}</th>
                                <td>{{ $category->category }}</td>
                                <td>{{ $category->sort }}</td>
                                <?php
                                    $date = $category->updated_at;
                                    $date = date('Y/m/d', strtotime($date));
                                 ?>
                                <td>{{ $date }}</td>
                                <td>
                                {!! Form::open(['route' => ['admin_categorys.edit', $category->id], 'method' => 'get']) !!}
                                    {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                                {!! Form::close() !!}
                                </td>
                                <td>
                                {!! Form::open(['route' => ['admin_categorys.destroy', $category->id], 'method' => 'delete']) !!}
                                    {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                                {!! Form::close() !!}
                                </td>
                            </tr>
                        <?php $i++; ?>
                        @endforeach
                    </tbody>
                </table>
                @endif
                {!! $categorys->render() !!}
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
