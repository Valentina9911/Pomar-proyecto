@extends('_layouts.master')

@section('body')
    @include('_partials.header')
    @include('_sections.image_description')
    @include('_sections.zones')
    @include('_sections.aliso-items')
    @include('_sections.aliso-plants')
    @include('_partials.footer')
    <!-- Principio del widget de globo de Calendly -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
    <script type="text/javascript">Calendly.initBadgeWidget({ url: 'https://calendly.com/aliso/60min', text: 'Agenda ya tu Cita', color: '#FF8563', textColor: '#ffffff', branding: false });</script>
    <!-- Final del widget de globo de Calendly -->
@endsection
