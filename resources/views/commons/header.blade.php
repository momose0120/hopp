<!-- Main Header -->
<header class="main-header">
  <!-- Logo -->
  <a href="{{ route('admin.get') }}" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <!-- <span class="logo-mini"><b>A</b>LT</span> -->
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>Hopp!</b></span>
  </a>

  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top" role="navigation">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <!-- Messages: style can be found in dropdown.less-->
        <li class="dropdown messages-menu">
          <!-- Menu toggle button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              応募者通知      <i class="fa fa-envelope-o"></i>
            <span class="label label-danger nofify_header_count">0</span>
          </a>
          <ul class="dropdown-menu">
            <li class="header text-center"><i class="fa fa-envelope-o"></i>　未対応応募が<spna class="nofify_header_count">0</spna>通あります</li>
            <li>
              <!-- inner menu: contains the messages -->
              <ul class="menu">
                <li><!-- start message -->
                  <a href="{{ route('admin_contacts.index') }}">
                    <p style="color: #337ab7; text-decoration: underline;">応募者管一覧へ</p>
                  </a>
                </li>
                <!-- end message -->
              </ul>
              <!-- /.menu -->
            </li>
          </ul>
        </li>
        <!-- /.messages-menu -->

        <!-- User Account Menu -->
        <li class="dropdown user user-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- The user image in the navbar-->
            <?php $image = Auth::user()->image ?>
            <img src="{{ asset("image/admins/$image") }}" class="user-image image_fit_cover" alt="User Image">
            <!-- hidden-xs hides the username on small devices so only the image appears. -->
            <span class="hidden-xs">{{ Auth::user()->name }}さん</span>
          </a>
          <ul class="dropdown-menu">
            <!-- The user image in the menu -->
            <li class="user-header">
              <img src="{{ asset("image/admins/$image") }}" class="img-circle image_fit_cover" alt="User Image">

              <p>
                {{ Auth::user()->name }}
                <small>{{ Auth::user()->department }}</small>
              </p>
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                  {!! Form::open(['route' => ['users.edit', Auth::user()->id], 'method' => 'get']) !!}
                      {!! Form::submit('管理者情報', ['class' => 'btn btn-default btn-flat']) !!}
                  {!! Form::close() !!}
              </div>
              <div class="pull-right">
                  {!! Form::open(['route' => ['logout'], 'method' => 'post']) !!}
                      {!! Form::submit('ログアウト', ['class' => 'btn btn-default btn-flat']) !!}
                  {!! Form::close() !!}
              </div>
            </li>
          </ul>
        </li>
        <!-- Control Sidebar Toggle Button -->
        <li>
          <!-- <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a> -->
        </li>
      </ul>
    </div>
  </nav>
</header>
