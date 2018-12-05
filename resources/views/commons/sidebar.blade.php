<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <!-- Sidebar user panel (optional) -->
    <div class="user-panel">
      <div class="pull-left image">
        <?php $image = Auth::user()->image ?>
        <img src="{{ asset("image/admins/$image") }}" class="img-circle user-image-sidebar image_fit_cover" alt="User Image" width="80" height="80">
      </div>
      <div class="pull-left info">
        <p>{{ Auth::user()->name }}さん</p>
        <!-- Status -->
        <a href="#"><i class="fa fa-circle text-success"></i>ログイン中</a>
      </div>
    </div>

    <!-- search form (Optional) -->
    <!-- <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
        <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
      </div>
    </form> -->
    <!-- /.search form -->

    <!-- Sidebar Menu -->
    <ul class="sidebar-menu" data-widget="tree">
      <li class="header">メニュー</li>
      <!-- Optionally, you can add icons to the links -->

      <!-- admin top -->
      <li class="active"><a href="{{ route('admin.get') }}"><i class="glyphicon glyphicon glyphicon-home"></i> <span>管理者ページトップ</span></a></li>

      <!-- public -->
      <li class="active"><a href="{{ route('top.get') }}" target="_blank"><i class="glyphicon glyphicon-cloud"></i> <span>公開ページトップ</span></a></li>

      <!-- manual -->
      <li class="active"><a target="_blank" href="https://support.hopp-recruit.jp/ja/"><i class="glyphicon glyphicon-book"></i> <span>教えてHopp!</span></a></li>

      <!-- talent -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-envelope"></i> <span>応募者</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            <span class="pull-right-container">
                <span class="label label-primary pull-right nofify_header_count">0</span>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_contacts.index') }}">応募者一覧</a></li>
        </ul>
      </li>

      <!-- recruit -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-list-alt"></i> <span>募集要項</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_recruits.create') }}">募集要項登録</a></li>
          <li><a href="{{ route('admin_recruits.index') }}">募集要項一覧・更新</a></li>
        </ul>
      </li>

      <!-- employee -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-link"></i> <span>働く仲間</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_employees.create')}}">働く仲間登録</a></li>
          <li><a href="{{ route('admin_employees.index')}}">働く仲間一覧・更新</a></li>
        </ul>
      </li>

      <!-- event -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-camera"></i> <span>イベント</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_events.create') }}">イベント登録</a></li>
          <li><a href="{{ route('admin_events.index') }}">イベント一覧・更新</a></li>
        </ul>
      </li>

      <!-- faq -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-question-sign"></i> <span>よくある質問</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_faq.create') }}">よくある質問登録</a></li>
          <li><a href="{{ route('admin_faq.index') }}">よくある質問一覧・更新</a></li>
          <li><a href="{{ route('admin_categorys.create') }}">FAQ分類登録</a></li>
        </ul>
      </li>

      <!-- message -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-comment"></i> <span>トップメッセージ</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_messages.edit', 1) }}">トップメッセージ登録・更新</a></li>
        </ul>
      </li>

      <!-- concept -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-plus-sign"></i> <span>保育所特長</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_concepts.create')}}">特長登録</a></li>
          <li><a href="{{ route('admin_concepts.index')}}">特長一覧・更新</a></li>
        </ul>
      </li>

      <!-- tenant -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-picture"></i> <span>保育所</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('admin_tenants.create') }}">保育所情報登録</a></li>
        </ul>
      </li>

      <!-- admin -->
      <li class="treeview">
        <a href="#"><i class="glyphicon glyphicon-user"></i> <span>管理者</span>
          <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="{{ route('register') }}">管理者登録</a></li>
          <li><a href="{{ route('users.index') }}">管理者一覧・更新</a></li>
        </ul>
      </li>

    </ul>
    <!-- /.sidebar-menu -->
  </section>
  <!-- /.sidebar -->
</aside>
