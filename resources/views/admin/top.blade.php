@extends('layouts.app')

@section('content')
    <div class="row">
        <!-- 応募者総数 -->
        <div class="col-md-6">
            <!-- box -->
            <div class="box box-danger">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-user"></i> 応募者総数（直近３ヶ月）</h3>

                  <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body no-padding">
                      <canvas id="contact_all">
                      </canvas>
                </div>
                <!-- /body -->
                <!-- footer -->
                <div class="box-footer text-center">
                  <a href="{{ route('admin_contacts.index') }}" class="uppercase"><i class="glyphicon glyphicon-play-circle"></i> 応募者一覧へ</a>
                </div>
                <!-- /footer -->
            </div>
            <!-- /box -->
        </div>

       <script>
           (function(){
               <?php
                $i = 0;
                foreach ($contact_result as $result) {
                    if ($i < 3){
                        $date[$i] = $result->created_at;
                        $count[$i] = $result->count;
                    }
                    $i++;
                }
               ?>
               'use strict';
               var type = 'bar';
               var data = {
                   labels: ['<?php if($i !== 2){ print $date[2]; } ?>', '<?php if($i !== 1){ print $date[1]; } ?>', '<?php if($i !== 0){ print $date[0]; } ?>'],
                   datasets: [{
                       label: '応募者数',
                       data: [<?php if($i !== 2){ print $count[2]; } ?>, <?php if($i !== 1){ print $count[1]; } ?>, <?php if($i !== 0){ print $count[0]; } ?>],
                       backgroundColor: '#5cb85c',
                       borderWidth: 0
                   }]
               };
               var options = {
                   scales: {
                       yAxes: [{
                           ticks: {
                               suggestedMin: 0,
                               suggestedMax: 20,
                               stepSize: 2
                           }
                       }]
                   },
                   legend: {
                       position: 'right'
                   }
               };
               var ctx = document.getElementById('contact_all').getContext('2d');
               var myChart = new Chart(ctx, {
                   type: type,
                   data: data,
                   options: options
               });
           })();
       </script>

       <!-- 保育所ごと -->
       <div class="col-md-6">
           <!-- box -->
           <div class="box box-success">
               <!-- header -->
               <div class="box-header with-border">
                 <h3 class="box-title"><i class="glyphicon glyphicon-stats"></i> 応募者数　各保育所（上位３）</h3>

                 <div class="box-tools pull-right">
                   <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                   </button>
                 </div>
               </div>
               <!-- /header -->
               <!-- body -->
               <div class="box-body no-padding">
                   <canvas id="contact_tenant">
                   </canvas>
               </div>
               <!-- /body -->
               <!-- footer -->
               <div class="box-footer text-center">
                 <a href="{{ route('admin_contacts.index') }}" class="uppercase"><i class="glyphicon glyphicon-play-circle"></i> 応募者一覧へ</a>
               </div>
               <!-- /footer -->
           </div>
           <!-- /box -->
       </div>
    </div>

    <script>
        (function(){
            <?php
             $i = 0;
             foreach ($contact_tenant as $key => $tenant) {
                     $name[$i] = $tenant['name'];
                     $count[$i] = $tenant['tenant_count'];
                     $i++;
            }
            ?>

            'use strict';
            var type = 'horizontalBar';
            var data = {
                labels: ['<?php if ($i >= 1){ print $name[0]; } ?>', '<?php if ($i >= 2){ print $name[1]; } ?>', '<?php if ($i >= 3){ print $name[2]; } ?>'],
                datasets: [{
                    label: '応募数',
                    data: ['<?php if ($i >= 1){ print $count[0]; } ?>', '<?php if ($i >= 2){ print $count[1]; } ?>', '<?php if ($i >= 3){ print $count[2]; } ?>'],
                    backgroundColor: '#337ab7',
                    borderWidth: 0
                },
            ]
            };
            var options = {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 10,
                            stepSize: 2
                        }
                    }]
                },
                legend: {
                    position: 'right'
                }
            };
            var ctx = document.getElementById('contact_tenant').getContext('2d');
            var myChart = new Chart(ctx, {
                type: type,
                data: data,
                options: options
            });
        })();
    </script>

    <div class="row">
        <!-- 応募者内訳 -->
          <div class="col-md-6">
              <!-- box -->
              <div class="box box-primary">
                  <!-- header -->
                  <div class="box-header with-border">
                    <h3 class="box-title"><i class="glyphicon glyphicon-folder-open"></i> 応募者　年齢内訳</h3>

                    <div class="box-tools pull-right">
                      <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <!-- /header -->
                  <!-- body -->
                  <div class="box-body no-padding">
                      <canvas id="contact_rite">
                      </canvas>
                  </div>
                  <!-- /body -->
                  <!-- footer -->
                  <div class="box-footer text-center">
                    <a href="{{ route('admin_contacts.index') }}" class="uppercase"><i class="glyphicon glyphicon-play-circle"></i> 応募者一覧へ</a>
                  </div>
                  <!-- /footer -->
              </div>
              <!-- /box -->
        </div>

        <!--　未対応応募者一覧 -->
        <div class="col-md-6">
            <!-- box -->
            <div class="box box-warning">
                <!-- header -->
                <div class="box-header with-border">
                  <h3 class="box-title"><i class="glyphicon glyphicon-send"></i> 応募者　未対応</h3>

                  <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <!-- /header -->
                <!-- body -->
                <div class="box-body no-padding">
                    @if (count($contacts) > 0)
                    <?php $i = 1; ?>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>氏名</th>
                                    <th>メッセージ</th>
                                    <th>応募日時</th>
                                </tr>
                            </thead>
                        <tbody>
                            @foreach ($contacts as $contact)
                                <tr>
                                    <th>{{ $i }}</th>
                                    <td>{{ $contact->name }}</td>
                                    <td>{{ $contact->message }}</td>
                                    <?php
                                        $date = $contact->updated_at;
                                        $date = date('Y/m/d', strtotime($date));
                                     ?>
                                    <td>{{ $date }}</td>
                                    <td>
                                    {!! Form::open(['route' => ['admin_contacts.edit', $contact->id], 'method' => 'get']) !!}
                                        {!! Form::submit('詳細', ['class' => 'btn btn-link btn-block btn-sm']) !!}
                                    {!! Form::close() !!}
                                    </td>
                                </tr>
                            <?php $i++; ?>
                            @endforeach
                        </tbody>
                    </table>
                    {!! $contacts->render() !!}
                    @endif
                    </canvas>
                </div>
                <!-- /body -->
                <!-- footer -->
                <div class="box-footer text-center">
                  <a href="{{ route('admin_contacts.index') }}" class="uppercase"><i class="glyphicon glyphicon-play-circle"></i> 応募者一覧へ</a>
                </div>
                <!-- /footer -->
            </div>
            <!-- /box -->
      </div>
   </div>
       <script>
           (function(){
               <?php
               $label = [];
               $count = [];
               $i = 0;
               foreach ($contact_age as $key => $age){
                   $label[$i] = $age['age_range'];
                   $count[$i] = $age['age_count'];
                   $i++;
               }
              ?>
               'use strict';
               var type = 'doughnut';
               var data = {
                   labels: ['<?php print $label[0] ?>', '<?php print $label[1] ?>', '<?php print $label[2] ?>', '<?php print $label[3] ?>', '<?php print $label[4] ?>', '<?php print $label[5] ?>'],
                   datasets: [{
                       data: [<?php print $count[0] ?>, <?php print $count[1] ?>, <?php print $count[2] ?>, <?php print $count[3] ?>, <?php print $count[4] ?>, <?php print $count[5] ?>],
                       backgroundColor: ['#5cb85c', '#DE4830', '#337ab7', '#8a6d3b', '#f0ad4e', '#5bc0de']
                   }]
               };
               var options = {
                   legend: {
                       position: 'right'
                   },
                   cutoutPercentage: 40
               };
               var ctx = document.getElementById('contact_rite').getContext('2d');
               var myChart = new Chart(ctx, {
                   type: type,
                   data: data,
                   options: options
               });
           })();
       </script>
@endsection
