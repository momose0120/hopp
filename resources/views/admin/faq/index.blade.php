@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_faq.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
    <li><a href="{{ route('admin_categorys.create') }}"><i class="glyphicon glyphicon-hand-right"></i>分類登録・更新はこちら</a></li>
</ul>
<!-- box -->
<div class="box box-default">
    <!-- header -->
    <div class="box-header with-border">
      <h3 class="box-title"><i class="glyphicon glyphicon-question-sign"></i> よくある質問一覧</h3>

    </div>
    <!-- /header -->
    <!-- body -->
    <div class="box-body" style="padding: 30px;">

    @if (count($faqs) > 0)
        <?php $category = ''; ?>
        @for ($i = 1; $i <= $category_count + 1; $i++)
            @foreach ($faqs as $faq)
                @if ($faq->category->sort === $i)
                    <div class="faq">

                        @if ($category !== $faq->category->category )
                            <div>
                                <h4 class="faq_header">{{ $faq->category->category }}</h4>
                            </div>
                        @endif

                        <div class="page-header">
                            <p class="faq_comment"><span class="btn btn-success">Q.</span>　：　{{ $faq->question }}</p>
                        </div>
                        <p class="faq_comment"><span class="btn btn-danger">A.</span>　：　{{ $faq->answer }}</p>
                        <ul class="list-inline">
                            <?php if ($faq->status === 0){ $status = '公開'; } else { $status = '非公開'; }?>
                            <li style="margin-right: 20px;"><span class="status">{{ $status }}</span></li>
                            <li>
                                {!! Form::open(['route' => ['admin_faq.edit', $faq->id], 'method' => 'get']) !!}
                                    {!! Form::submit('編集', ['class' => 'btn btn-link btn-block btn-sm']) !!}
                                {!! Form::close() !!}
                            </li>
                            <li>
                                {!! Form::open(['route' => ['admin_faq.destroy', $faq->id], 'method' => 'delete']) !!}
                                    {!! Form::submit('削除', ['class' => 'btn btn-link btn-block destroy btn-sm']) !!}
                                {!! Form::close() !!}
                            </li>
                        </ul>
                    </div>
                    <?php $category = $faq->category->category ; ?>
                @endif
            @endforeach
        @endfor
    @endif

</div>
<!-- /body -->
</div>
<!-- /box -->

<!--　削除確認メッセージ　-->
<script>
    $(function(){
        $(".destroy").click(function(){
            if(confirm("本当に削除しますか？")){
                // 削除処理。
            }else{
                return false;
            }
        });
    });
</script>

@endsection
