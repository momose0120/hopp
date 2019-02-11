<ul class="staffinterview-linklist mask-slide-2 is-appear">
    <!-- ブレイド反映 -->
    @if (count($events) > 0)
        @foreach ($events as $event)
            <li class="fade-parent">
                <a href="{{ route('eventinfo.show', $event->id) }}">
                    <div class="fade-child list_width_interview_event">
                        <div class="catch-phras">
                            {{ $event->title }}
                        </div>
                        <div class="img-box">
                            <img src="{{ asset("image/events/$event->main_image") }}" width="100%" alt="{{ $event->main_image_title }}">
                        </div>
                    </div>
                    <div class="detail-box">
                        <p class="detail-career heightLine-group1 event-list-detail-type">{{ $event->type }}</span></p>
                        <p class="detail-name-jp event-list-detail-date">日時　{{ $event->date }}</p>
                        <p class="detail-name-en">開催場所　{{ $event->location }}</p>
                    </div>
                </a>
            </li>
        @endforeach
    @else
        <div class="coming_soon">
            <p class="comin_soon_detail_en">coming soon</p>
            <p class="comin_soon_detail_ja">イベンド情報は近日公開します。</p>
        </div>
    @endif
</ul>
