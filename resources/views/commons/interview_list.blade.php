<ul class="staffinterview-linklist mask-slide-2 is-appear">
    <!-- ブレイド反映 -->
    @if (count($interviews) > 0)
        @foreach ($interviews as $interview)
            <li class="fade-parent">
                <a href="{{ route('interview.show', $interview->id) }}">
                    <div class="fade-child">
                        <div class="catch-phras">
                            {{ $interview->title }}
                        </div>
                        <div class="img-box">
                            <img src="{{ asset("image/employees/$interview->main_image") }}" width="100%" alt="{{ $interview->main_image_title }}">
                        </div>
                    </div>
                    <div class="detail-box">
                        <p class="detail-career heightLine-group1">{{ $interview->type }}/{{ $interview->position }}</span></p>
                        <p class="detail-name-jp">{{ $interview->name }}</p>
                        <p class="detail-name-en">{{ $interview->name_en }}</p>
                    </div>
                </a>
            </li>
        @endforeach
    @endif
</ul>
