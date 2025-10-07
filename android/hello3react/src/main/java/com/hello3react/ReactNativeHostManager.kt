package com.hello3react

import android.app.Application

object ReactNativeHostManager {
    fun initialize(application: Application, onJSBundleLoaded: (() -> Unit)? = null) {
        // Call the callback if provided
        onJSBundleLoaded?.invoke()
    }
}
