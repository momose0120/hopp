@extends('layouts.app')

@section('content')
<ul class="list-inline">
    <li><a href="{{ route('admin_events.create') }}"><i class="glyphicon glyphicon-hand-right"></i>新規登録はこちら</a></li>
</ul>

        <!-- パネル表示 -->
        @if (count($events) > 0)
        <div class="row">
          @foreach ($events as $event)
          <div class="col-md-3 col-sm-6 col-xs-12">

              <div class="event">
                <div class="type"><span class="label label-primary" style="font-weight: normal; font-size: 12px; padding: 5px;">{{ $event->type }}</span></div>
                  <div class="panel panel-default">
                      <div class="panel-heading text-center">
                          <p class="event_table_line">{{ $event->title }}</p>
                      </div>
                      <div class="panel-body">
                          <div class="text-center" style="margin-bottom: 40px;">
                              <img src="{{ asset("image/events/$event->main_image") }}" alt="サムネイル" width="220" height="160" class="img-rounded image_fit_cover image_fit_cover_event">
                          </div>
                          <table class="table event_table">
                            <tbody>
                                <tr>
                                  <th>ID</th>
                                  <td>{{ $event->id }}</td>
                                </tr>
                                <tr>
                                  <th>概要</th>
                                  <td><p class="event_table_line_half">{{ $event->type }}</p></td>
                                </tr>
                                <tr>
                                  <th>日時</th>
                                  <td>{{ $event->date }}</td>
                                </tr>
                                <!-- <tr>
                                  <th>場所</th>
                                  <td><p  class="event_table_line_half">{{ $event->location }}</p></td>
                                </tr> -->
                            </tbody>
                          </table>
                      </div>
                      <div class="panel-footer">
                        <ul class="list-inline text-center">
                            <?php if ($event->status === 0){ $status = '公開'; } else { $status = '非公開'; }?>
                            <li>
                                <span class="status">{{ $status }}</span>
                            </li>
                            <li>
                                {!! Form::open(['route' => ['admin_events.edit', $event->id], 'method' => 'get']) !!}
                                    {!! Form::submit('編集', ['class' => 'btn btn-success btn-block btn-sm']) !!}
                                {!! Form::close() !!}
                            </li>
                            <li>
                                {!! Form::open(['route' => ['admin_events.destroy', $event->id], 'method' => 'delete']) !!}
                                    {!! Form::submit('削除', ['class' => 'btn btn-danger btn-block btn-sm']) !!}
                                {!! Form::close() !!}
                            </li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
          @endforeach
        </div>
        @endif
      <!-- 終了 -->
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

@endsection
