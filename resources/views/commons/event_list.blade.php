<ul class="staffinterview-linklist mask-slide-2 is-appear">
    <!-- ブレイド反映 -->
    @if (count($events) > 0)
        @foreach ($events as $event)
            <li class="fade-parent">
                <a href="{{ route('eventinfo.show', $event->id) }}">
                    <div class="fade-child">
                        <div class="catch-phras">
                            {{ $event->title }}
                        </div>
                        <div class="img-box">
                            <img src="{{ asset("image/events/$event->main_image") }}" width="100%" alt="">
                        </div>
                    </div>
                    <div class="detail-box">
                        <p class="detail-career heightLine-group1">{{ $event->type }}</span></p>
                        <p class="detail-name-jp">{{ $event->date }}</p>
                        <p class="detail-name-en">{{ $event->location }}</p>
                    </div>
                </a>
            </li>
        @endforeach
    @endif
</ul>
