function dm3_filemanager() {

    // ------------------------------------------------------------------------------------------------ Overriding Hooks

    this.process_files_drop = function(files) {
        canvas.start_grid_positioning()
        //
        for (var i = 0; i < files.get_directory_count(); i++) {
            get_plugin("dm3_files").create_file_topics(files.get_directory(i))
        }
        for (var i = 0; i < files.get_file_count(); i++) {
            get_plugin("dm3_files").create_file_topic(files.get_file(i))
        }
        //
        canvas.stop_grid_positioning()
    }
}
