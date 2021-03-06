<div class="panel panel-default panel-resume-progress">
    <div class="panel-heading">简历完善度</div>
    <div class="panel-body">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: {{ $user->getResumeColumnCount() }}%; background: #f0ad4e;">
                {{ $user->getResumeColumnCount() }} %
            </div>
        </div>
        <div id="resume-show">
            <a href="{{ route('user.resume.download') }}">
                @if(!empty($resume))
                    {{ $resume->resume_name }}
                @endif
            </a>
        </div>
        <div class="upload-area">
            <input type="file" name="resume" id="" class="input-file" accept=".doc,.docx,application/pdf">
            <button class="btn btn-xs btn-default">上传附件简历</button>
        </div>
    </div>
</div>